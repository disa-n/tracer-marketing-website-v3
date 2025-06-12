export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "001",
    question: "Do you run the pipelines for me?",
    answer:
      "*We are not a workflow automation company and do not offer no-code solutions.* \n\n At Tracer, we believe that as scientific companies are increasingly adopting software to innovate, scientists are becoming software engineers. They want the flexibility to run their pipelines where they want and in their preferred configuration. \n\nTracer runs in the background as part of any pipeline you run, similar to observability for cloud engineering. We provide a dashboard to know what is happening in real time for monitoring and insights at all levels of the organisation.",
  },
  {
    id: "002",
    question: "What type of analyses or indications do you support?",
    answer:
      "We support any analysis running on Linux systems. Tracer recognises any computational biology framework or tool, written in bash, Python, or R. It supports the most common workflow management and schedulers, including Nextflow, AWS Batch, Slurm, and WDL.",
  },
  {
    id: "003",
    question: "Is my data secure?",
    answer:
      "Tracer is built on *zero-trust principles.* We use strong encryption and a secure infrastructure setup, following industry standards, including GDPR and HIPAA, to ensure full protection and transparency at every step.\n\nAll your data stays in your hands at all times. Unlike SaaS-based solutions, Tracer uses a ‘bring-your-own-cloud’ approach, where nothing gets exported *ever*.",
  },
  {
    id: "004",
    question: "How long does it take to set up Tracer?",
    answer:
      "The platform is launched by integrating our one line of code **[TO BE FINALISED]**",
  },
  {
    id: "005",
    question: "How is Tracer different from other observability companies?",
    answer:
      "Tracer uses the latest technological advances to **[TO BE FINALISED]**",
  },
  {
    id: "006",
    question:
      "Why do you need to go to the Operating System (OS) to collect the information about the pipelines?",
    answer:
      "The tools and frameworks packages used in scientific industries often provide non-descriptive logs, if they are there at all. These logs also do not adhere to OpenTelemetry standards, meaning any observability platform that extracts information from the application layer will not be helpful.\n\nTracer uniquely uses *synthetic log generation*, extracting information directly from the operating system and reformatting it to OpenTelemetry standards.",
  },
];

