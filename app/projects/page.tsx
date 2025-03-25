// app/projects/page.tsx
export default function Projects() {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          <li>
            <a href="https://github.com/Murthy13579/job-board" target="_blank" rel="noopener noreferrer">
              Job Board Application
            </a> - A REST API built with Spring Boot for managing job listings with a simple frontend using HTML, CSS, and JavaScript. Deployed on AWS EC2.
          </li>
          {/* Add other projects here */}
        </ul>
      </div>
    );
  }
  