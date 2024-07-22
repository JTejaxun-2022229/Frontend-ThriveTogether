
import './chat.css';
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useUserDetails } from "../../shared/hooks/useUserDetails";

export const Chat = () => {
    const { email } = useUserDetails();
    const secret = email;

    if (!email || email === "Guest") {
        return <div>Loading...</div>;
    }

    return (
        <div className="chat-container" style={{ height: "100vh", width: "100vw" }}>
            <PrettyChatWindow
                projectId="59afcf6e-41f1-42d4-960d-dd1c3fd8e86a"
                username={email}
                secret={secret}
                style={{ height: "100%" }}
            />
        </div>
    );
};
