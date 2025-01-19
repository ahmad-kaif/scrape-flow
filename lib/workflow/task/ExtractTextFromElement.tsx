import { TaskParamType, TaskType } from "@/types/task";
import { LucideProps, TextIcon } from "lucide-react";

export const ExtractTextFromElementTask = {
    type: TaskType.PAGE_TO_HTML,
    label: "Extract text from element",
    icon: (props: LucideProps) => (
        <TextIcon className="stroke-pink-400" {...props}/>
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Html",
            type: TaskParamType.STRING,
            required: true,
            variant: "textarea",
        },
        {
            name: "Selector",
            type: TaskParamType.STRING,
            required: true,
        }
    ],
    outputs: [
        {
            name: "Extracted text",
            type: TaskParamType.STRING
        },
        
    ],
};