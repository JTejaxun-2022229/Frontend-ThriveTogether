import { useState } from "react";
import { useAddComment } from "../services/api";

export const useAddCommentForo = () => {
    const [error, setError] = useState(null);

    const addComment = async (forumId, username, text, setForum ) => {
        
        const result = await useAddComment( forumId, username, text );

        if(result.error){
            setError(result.message);
        }else{
            setForum( prevForum  => ({
                ...prevForum,
                commentaries: [ ...prevForum.commentaries, result ]
            }));
        }
    };

    return { addComment, error};

}