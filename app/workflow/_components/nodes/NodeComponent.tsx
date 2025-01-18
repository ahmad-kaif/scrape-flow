import {memo} from "react";
import NodeCard from "./NodeCard";
import { NodeProps } from "@xyflow/react";
import NodeHeader from "./NodeHeader";
import { AppNodeData } from "@/types/appNode";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { NodeInput, NodeInputs } from "./NodeInputs";
import { NodeOutput, NodeOutputs } from "./NodeOutputs";

const NodeComponent = memo((props: NodeProps) => {

    const nodeData  = props.data as AppNodeData; 
    const task = TaskRegistry[nodeData.type];

    return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected} >
        <NodeHeader taskType={nodeData.type}/>
        <NodeInputs>
            {task.inputs.map((input)=>(
                <NodeInput key={input.name} input={input} nodeId={props.id}/>
            ))}
        </NodeInputs>

        <NodeOutputs>
            {task.inputs.map((output)=>(
                <NodeOutput key={output.name} output={output} nodeId={props.id}/>
            ))}
        </NodeOutputs>
    </NodeCard>
    );
});

export default NodeComponent;

NodeComponent.displayName = "NodeComponent"