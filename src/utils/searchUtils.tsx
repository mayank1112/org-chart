import React, {ReactElement} from "react";

export const isTeamMatchingKeyword = (teamName: string, keyword: string): boolean => {
    return teamName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
};

export const getHighlightedText = (text: string, highlight: string): ReactElement => {
    const parts: string[] = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <span>
            { parts.map((part, iteration) =>
                part
                    ? <span
                        key={iteration}
                        style={
                            part.toLowerCase() === highlight.toLowerCase()
                            ? { fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }
                            : {}
                        }
                >{part}</span>
                    : null
            )}
        </span>
    );
};
