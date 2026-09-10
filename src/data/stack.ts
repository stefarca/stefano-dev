/**
 * The toolbox, grouped. Placeholder — tweak to taste.
 */

export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["C#", "Java", "TypeScript", "SQL"],
  },
  {
    label: "Backend",
    items: [
      ".NET",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "REST",
      "GraphQL",
      "Struts",
    ],
  },
  {
    label: "Cloud & DevOps (Azure)",
    items: [
      "Service Bus",
      "Event Grid",
      "Container Apps",
      "Azure SQL",
      "Redis Cache",
      "Blob & Queue Storage",
      "Key Vault",
      "DevOps Pipelines",
      "Docker",
    ],
  },
  {
    label: "Quality & observability",
    items: [
      "xUnit",
      "Moq",
      "Testcontainers",
      "Serilog",
      "OpenTelemetry",
      "Dynatrace",
    ],
  },
  {
    label: "Frontend & mobile",
    items: ["React", "React Native", "Wear OS"],
  },
  {
    label: "Databases",
    items: ["Azure SQL", "DB2", "Oracle", "Redis"],
  },
];
