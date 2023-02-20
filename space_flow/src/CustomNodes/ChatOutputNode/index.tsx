import { Bars3CenterLeftIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { Handle, Position } from "reactflow";
import InputComponent from "../../components/inputComponent";
import { isValidConnection, nodeColors, snakeToNormalCase } from "../../utils";
import Tooltip from "../../components/TooltipComponent";
import { useContext } from "react";
import { typesContext } from "../../contexts/typesContext";

export default function ChatOutputNode({ data }) {
  const {types} = useContext(typesContext);
  return (
    <div className="prompt-node relative rounded-lg solid border flex justify-center align-center py-3 px-6 bg-gray-50" style={{color: nodeColors[types[data.type]]}}>
      <Tooltip title="Message: str">
        <Handle
          type="target"
          isValidConnection={(connection) => isValidConnection(data,connection)}
          position={Position.Left}
          id={"str|output|"+data.id}
          className="ml-1 bg-transparent border-solid border-l-8 border-y-transparent border-y-8 border-r-0 rounded-none"
          style={{borderLeftColor: nodeColors['chat']}}
        ></Handle>
      </Tooltip>

      <div className="flex gap-3 text-lg font-medium items-center" style={{color: nodeColors[types[data.type]]}}>
        Output
        <Bars3CenterLeftIcon className="h-8 w-8 mt-1" />
      </div>
    </div>
  );
}