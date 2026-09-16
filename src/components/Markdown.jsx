import { Fragment } from 'react';
function inline(text) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g).map((part, index) => {
    if (part.startsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a>;
    return part;
  });
}
export default function Markdown({ content = '' }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith('```')) {
      const code = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      i++; blocks.push(<pre><code>{code.join('\n')}</code></pre>); continue;
    }
    const heading = line.match(/^(#{1,3}) (.+)$/);
    if (heading) { const Tag = `h${Math.min(heading[1].length + 1, 4)}`; blocks.push(<Tag>{inline(heading[2])}</Tag>); i++; continue; }
    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line); const pattern = ordered ? /^\d+\. / : /^- /; const items = [];
      while (i < lines.length && pattern.test(lines[i])) items.push(lines[i++].replace(pattern, ''));
      const List = ordered ? 'ol' : 'ul'; blocks.push(<List>{items.map((item, index) => <li key={index}>{inline(item)}</li>)}</List>); continue;
    }
    if (line.startsWith('> ')) { blocks.push(<blockquote>{inline(line.slice(2))}</blockquote>); i++; continue; }
    const paragraph = [lines[i++]];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3} |```|- |\d+\. |> )/.test(lines[i])) paragraph.push(lines[i++]);
    blocks.push(<p>{inline(paragraph.join(' '))}</p>);
  }
  return blocks.map((block, index) => <Fragment key={index}>{block}</Fragment>);
}
