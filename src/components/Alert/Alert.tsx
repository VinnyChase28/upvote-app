import React from "react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import Upvote from "../Upvote/Upvote";
import { FileTerminal } from "lucide-react";

export interface AlertComponentProps {
  postId: string;
  title: string;
  description: string;
}
const AlertComponent: React.FC<AlertComponentProps> = ({
  postId,
  title,
  description,
}) => {
  return (
    <Alert className="flex items-center justify-between p-4 mb-4 bg-blue-100 rounded-lg">
      <div className="flex items-center">
        <FileTerminal className="mr-2 h-5 w-5 text-blue-500" />
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default AlertComponent;
