import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ✏️ Edit these values — they are the only things you need to change.
const PROFILE = {
  name: 'Naman Jain',
  role: 'AI Full Stack Developer',
  tagline: 'I build production-oriented, AI-enabled enterprise applications across the complete stack: .NET, Angular, Python and Generative AI.',
  location: 'Pune, Maharashtra, India',
  availability: 'Immediate joiner · Full-time · Remote, hybrid or on-site',
  email: 'namanhb9424@gmail.com',
  github: '', // optional: add your GitHub URL to show a GitHub link
  apiUrl: '' // optional: URL of the deployed .NET API, e.g. https://my-portfolio-api.azurewebsites.net
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  p = PROFILE;
  menuOpen = signal(false);
  status = signal('');
  form = { name: '', email: '', message: '' };

  stats = [
    { value: '5', label: 'years in software development' },
    { value: '3+', label: 'years building AI-powered applications' }
  ];

  skills = [
    { group: 'AI / GenAI', items: ['LLMs', 'OpenAI / Azure OpenAI', 'Claude API', 'Llama', 'Prompt engineering', 'AI agents', 'Tool calling', 'LLM evaluation'] },
    { group: 'RAG & Search', items: ['RAG', 'Embeddings', 'Semantic search', 'Hybrid search', 'Chunking strategies', 'Metadata filtering', 'Document processing'] },
    { group: 'Vector DBs & Frameworks', items: ['Pinecone', 'Qdrant', 'Weaviate', 'FAISS', 'Chroma', 'Azure AI Search', 'LangChain', 'LlamaIndex', 'Semantic Kernel'] },
    { group: 'Backend', items: ['C#', '.NET 6+', 'ASP.NET Core', 'Web API', 'Entity Framework Core', 'LINQ', 'Microservices', 'JWT auth'] },
    { group: 'Frontend', items: ['Angular 12+', 'TypeScript', 'RxJS', 'Angular Material', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap'] },
    { group: 'Python', items: ['Python', 'FastAPI', 'Flask', 'LLM services', 'Data processing'] },
    { group: 'Databases', items: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Database design'] },
    { group: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Jenkins', 'Git'] }
  ];

  projects = [
    {
      title: 'Enterprise Intelligent Knowledge Assistant',
      image: 'assets/projects/knowledge.svg',
      summary: 'Lets employees ask questions in plain language and get answers grounded in internal documents.',
      points: ['Document ingestion, chunking, embeddings and vector indexing', 'Semantic and hybrid retrieval with metadata filtering', 'LLM answers served through ASP.NET Core APIs to an Angular chat interface'],
      stack: ['RAG', 'OpenAI / Azure OpenAI', 'LangChain', 'Pinecone / Qdrant / Azure AI Search', 'ASP.NET Core', 'Angular', 'FastAPI']
    },
    {
      title: 'AI Agent-Based Enterprise Automation Platform',
      image: 'assets/projects/agents.svg',
      summary: 'LLM agents that understand a request, retrieve company knowledge and run multi-step workflows.',
      points: ['Tool calling against APIs, databases and business tools, with structured outputs and validation', 'Authentication, audit logging and secure tool access', 'ASP.NET Core microservices, Python orchestration and Angular views of task status and results'],
      stack: ['AI agents', 'Tool calling', 'Semantic Kernel', 'LangChain', 'ASP.NET Core', 'Python / FastAPI', 'Angular']
    },
    {
      title: 'AI Document Intelligence Platform',
      image: 'assets/projects/docs.svg',
      summary: 'Ingests, searches and summarises documents in one workspace.',
      points: ['PDF ingestion and text extraction', 'AI summarisation and search', 'Document management workflows'],
      stack: ['Angular', '.NET', 'MySQL', 'LLM']
    },
    {
      title: 'Enterprise Full-Stack Applications',
      image: 'assets/projects/enterprise.svg',
      summary: 'Line-of-business web applications built to be secure, maintainable and fast.',
      points: ['REST APIs with Entity Framework Core, LINQ and dependency injection', 'Schemas and stored procedures across SQL Server, PostgreSQL and MySQL', 'Reusable Angular components with RxJS and Angular Material'],
      stack: ['ASP.NET Core', 'Angular', 'SQL Server', 'PostgreSQL', 'Docker', 'CI/CD']
    }
  ];

  experience = [
    {
      role: 'AI Full Stack Developer', company: 'Dakshina Murthy Pvt Ltd.', period: 'Aug 2023 – Present',
      points: [
        'Build RAG pipelines: ingestion, chunking, embeddings, vector indexing, semantic retrieval and LLM response generation.',
        'Develop AI solutions with OpenAI, Azure OpenAI, Claude and Llama for search, document understanding, summarisation, Q&A and workflow automation.',
        'Build ASP.NET Core Web APIs and microservices that expose AI capabilities to enterprise apps and Angular clients.',
        'Create Angular interfaces for conversational chat, document search, AI-assisted workflows and dashboards.',
        'Design AI agents and tool-calling workflows that interact securely with APIs, databases and enterprise services.',
        'Design MySQL, SQL Server and PostgreSQL models; secure APIs with authentication, authorisation, validation and logging.',
        'Containerise services with Docker, support CI/CD and Azure/AWS deployments, and use Cursor AI for coding, testing and documentation.'
      ]
    },
    {
      role: 'Full Stack Developer', company: 'Dakshina Murthy Pvt Ltd.', period: 'Sep 2021 – Jul 2023',
      points: [
        'Built enterprise web applications with C#, ASP.NET Core, Web API, Angular, TypeScript and SQL Server.',
        'Developed and consumed REST APIs for third-party integrations, using Entity Framework Core, LINQ and dependency injection.',
        'Designed schemas, stored procedures and data-access layers across SQL Server, PostgreSQL and MySQL.',
        'Improved performance through query and API optimisation, caching, async programming and frontend tuning.',
        'Began adopting AI-assisted development, which led to the move into an AI-focused role.'
      ]
    }
  ];

  genai = [
    { t: 'Retrieval-augmented generation', d: 'Chunking, embeddings, hybrid search and metadata filtering so answers come from your own documents.' },
    { t: 'LLM integration', d: 'Prompt engineering and integration of OpenAI, Azure OpenAI, Claude and Llama into .NET and Python services.' },
    { t: 'AI agents', d: 'Tool calling that lets a model take actions through secured, audited APIs.' },
    { t: 'Vector databases', d: 'Pinecone, Qdrant, Weaviate, FAISS, Chroma and Azure AI Search for document retrieval.' }
  ];

  certifications = ['Azure AI Certification Training (Apr 2023)', 'Prompt Engineering, DeepLearning.AI (Oct 2022)', 'AI Foundations, IBM (Feb 2022)'];
  education = [{ degree: 'B.Tech, Civil Engineering', school: 'Oriental Institute of Science & Technology', period: '2017 – 2021', score: '81.2%' }];

  send() {
    const { name, email, message } = this.form;
    if (!name || !email || !message) { this.status.set('Fill in your name, email and message.'); return; }
    if (!this.p.apiUrl) {
      location.href = `mailto:${this.p.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + name)}&body=${encodeURIComponent(message + '\n\n' + email)}`;
      return;
    }
    this.status.set('Sending…');
    fetch(`${this.p.apiUrl}/api/contact`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.form)
    }).then(r => {
      if (!r.ok) throw new Error();
      this.status.set('Message sent. I will reply by email.');
      this.form = { name: '', email: '', message: '' };
    }).catch(() => this.status.set('Could not send. Email me directly at ' + this.p.email));
  }
}
