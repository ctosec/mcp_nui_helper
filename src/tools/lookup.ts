import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(__dirname, "../../data/widgets.json");
const db = JSON.parse(readFileSync(dataPath, "utf-8"));

interface WidgetProperty {
  name: string;
  type: string;
  description: string;
}

interface WidgetEvent {
  name: string;
  signature: string;
  description: string;
}

interface WidgetMethod {
  name: string;
  signature: string;
  description: string;
}

interface Widget {
  name: string;
  namespace: string;
  inherits: string | null;
  category: string;
  description: string;
  properties: WidgetProperty[];
  events: WidgetEvent[];
  methods: WidgetMethod[];
  example: string;
}

export function lookupWidget(input: {
  name: string;
  filter?: "properties" | "events" | "methods" | "all";
}): any {
  const widget = db.widgets.find(
    (w: Widget) => w.name.toLowerCase() === input.name.toLowerCase()
  );

  if (!widget) {
    return {
      error: `Widget "${input.name}" not found. Use list_widgets to see available widgets.`,
    };
  }

  const filter = input.filter ?? "all";

  if (filter === "all") {
    return { ...widget };
  }

  const result: any = {
    name: widget.name,
    namespace: widget.namespace,
    inherits: widget.inherits,
    category: widget.category,
    description: widget.description,
    example: widget.example,
  };

  if (filter === "properties") result.properties = widget.properties;
  if (filter === "events") result.events = widget.events;
  if (filter === "methods") result.methods = widget.methods;

  return result;
}

export function listWidgets(input: { category?: string }): any {
  const categories = db.categories as Record<string, string[]>;

  if (!input.category || input.category === "all") {
    return { ...categories };
  }

  if (!(input.category in categories)) {
    return {
      error: `Category "${input.category}" not found. Available: ${Object.keys(categories).join(", ")}`,
    };
  }

  return { [input.category]: categories[input.category] };
}
