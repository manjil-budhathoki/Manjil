/* Experience.jsx */
export default function Experience({ data }) {
  const { education = [], work = [] } = data || {};

  const maxSkillsToShow = 3; // Show 3 as separate pills

  return (
    <div className="space-y-12">
      {/* Education Section */}
      <section>
        <h2 className="text-lg font-bold tracking-tight mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
          Education
        </h2>
        <div className="space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="flex items-start gap-3">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-8 h-8 object-contain mt-1"
                />
              )}
              <div>
                <a
                  href={edu.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {edu.school}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-bold">
                  {edu.degree}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {edu.period} <br /> {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section>
        <h2 className="text-lg font-bold tracking-tight mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
          Work Experience
        </h2>

        {work.length === 0 ? (
          <div className="text-gray-500 italic border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center text-sm">
            🚀 No work experience yet — this space is waiting for your next big role!
          </div>
        ) : (
          <div className="space-y-5">
            {work.map((job, i) => {
              const visibleSkills = job.skills?.slice(0, maxSkillsToShow) || [];
              const extraSkills = job.skills?.slice(maxSkillsToShow) || [];

              return (
                <div key={i} className="flex items-start gap-3">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-8 h-8 object-contain mt-1"
                    />
                  )}
                  <div>
                    <a
                      href={job.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {job.company}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                      {job.role} • {job.type}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {job.period} <br /> {job.location}
                    </p>

                    {/* Skills */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        {visibleSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full text-[11px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {extraSkills.length > 0 && (
                          <span
                            className="text-gray-600 dark:text-gray-300 text-[11px] font-medium cursor-default border-b border-dotted border-gray-500 dark:border-gray-400"
                            title={extraSkills.join(", ")}
                          >
                            and +{extraSkills.length} skills
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
