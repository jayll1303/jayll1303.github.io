import feCreditLogo from './organization-icons/fe-credit.svg';
import fptSoftwareLogo from './organization-icons/fpt-software.svg';
import digiUniLogo from './organization-icons/digiuni.svg';
import fptUniversityLogo from './organization-icons/fpt-university.png';
import './experience-timeline.css';

const organizationLogos = {
  'FE Credit': feCreditLogo,
  'FPT Software QAI': fptSoftwareLogo,
  DigiUni: digiUniLogo,
  'FPT University': fptUniversityLogo,
};

function OrganizationMark({ name }) {
  const logo = organizationLogos[name];
  const monogram = name === 'FPT University Scholarship Hunter Association'
    ? 'SHA'
    : name.split(/\s+/).map((word) => word[0]).join('').slice(0, 3).toUpperCase();

  return (
    <span className="experience-timeline__mark" aria-hidden="true">
      {logo ? (
        <img src={logo} alt="" loading="lazy" />
      ) : (
        <span className="experience-timeline__monogram">{monogram}</span>
      )}
    </span>
  );
}

function TimelineEntry({ kind, role, organization, period, detail }) {
  return (
    <li className="experience-timeline__entry"><span className="timeline-segment" aria-hidden="true"/>
      <article className="experience-timeline__card">
        <div className="experience-timeline__topline">
          <span className="experience-timeline__kind">{kind}</span>
          {period && <span className="experience-timeline__period">{period}</span>}
        </div>
        <div className="experience-timeline__identity">
          <OrganizationMark name={organization} />
          <div>
            <h3>{role}</h3>
            {role !== organization && <p className="experience-timeline__organization">{organization}</p>}
          </div>
        </div>
        <p className="experience-timeline__detail">{detail}</p>
      </article>
    </li>
  );
}

export default function ExperienceTimeline({ experience, education, community }) {
  return (
    <section className="experience-timeline" aria-label="Experience, education and community timeline">
      <ol className="experience-timeline__list">
        {experience.map((item) => {
          const [organization, ...location] = item.place.split(' · ');
          return (
            <TimelineEntry
              key={`${item.period}-${item.role}-${item.place}`}
              kind="Work"
              role={item.role}
              organization={organization}
              period={item.period}
              detail={[location.join(' · '), item.detail].filter(Boolean).join(' · ')}
            />
          );
        })}
        <TimelineEntry
          kind="Education"
          role={education.school}
          organization={education.school}
          detail={education.detail}
        />
        <TimelineEntry
          kind="Community"
          role={community.role}
          organization={community.place}
          period={community.period}
          detail={community.detail}
        />
      </ol>
    </section>
  );
}
