import React from "react";
import { css } from '../../../styled-system/css';
import { CheckCircleIcon, TimeIcon } from "@chakra-ui/icons";
import type { Todo } from "@/services/types/todo.types";

interface Props {
    data: Todo;
}

export default function TodoCard({ data }: Props) {
    return (
        <div className={cardContainer}>
            <div className={contentStack}>
                <div className={headerContainer}>
                    <h2 className={title}>{data.title}</h2>
                    <div className={iconContainer}>
                        {/* Icon color based on completion status */}
                        <CheckCircleIcon
                            boxSize={6}
                            className={iconStyle(data.completed)}
                        />
                    </div>
                </div>

                <p className={subText}>User ID: {data.userId}</p>
                <hr className={divider} />

                <div className={footerContainer}>
                    {/* Badge text and color based on completion status */}
                    <span className={badge(data.completed)}>
                        {data.completed ? "Completed" : "Pending"}
                    </span>
                    <p className={idText}>ID: {data.id}</p>
                </div>
            </div>
        </div>
    );
}

const cardContainer = css({
    borderRadius: "lg",
    boxShadow: "lg",
    padding: 8,
    backgroundColor: "white",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)", // Scale effect on hover
    },
});

const contentStack = css({
    display: "flex",
    flexDirection: "column",
    gap: 4,
});

const headerContainer = css({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
});

const title = css({
    fontSize: "2xl",
    fontWeight: "bold",
});

const iconContainer = css({
    display: "flex",
    alignItems: "center",
});

const iconStyle = (completed: boolean) =>
    css({
        color: completed ? "green.300" : "yellow.300", // Green if completed, yellow if not
    });

const subText = css({
    fontSize: "lg",
    fontWeight: "medium",
    opacity: 0.9,
});

const divider = css({
    borderColor: "whiteAlpha.600",
});

const footerContainer = css({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
});

const badge = (completed: boolean) =>
    css({
        backgroundColor: completed ? "green" : "red", // Green if completed, red if not
        fontSize: "0.9em",
        paddingX: 4,
        paddingY: 1,
        borderRadius: "full",
        textTransform: "uppercase",
        letterSpacing: "wider",
        color: 'white',
    });

const idText = css({
    fontSize: "sm",
    opacity: 0.8,
});
