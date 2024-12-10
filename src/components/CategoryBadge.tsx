import { Avatar, Chip, ChipProps, styled } from "@mui/material";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { fadeIn } from "../styles";
import type { Category } from "../types/user";
import { getFontColor } from "../utils";

interface StyledBadgeProps {
    backgroundClr?: string;
    borderClr?: string;
    glow?: boolean;
    list?: boolean | string;
}

export const StyledCategoryBadge = styled(Chip)<StyledBadgeProps>`
    background-color: ${({ backgroundClr }) => backgroundClr};
    color: ${({ backgroundClr }) => getFontColor(backgroundClr || "")};
    box-shadow: ${({ glow, backgroundClr }) => (glow ? `0 0 8px ${backgroundClr}` : "none")};
    border: ${({ borderClr }) => (borderClr ? `1px solid ${borderClr}` : "none")};
    font-weight: bold;
    font-size: 14px;
    margin: 6px 0 0 0;
    padding: 8px;
    transition: 0.3s all;
    animation: ${fadeIn} 0.5s ease-in;

    &:hover {
        background-color: ${({ backgroundClr }) => `${backgroundClr} !important`};
        opacity: ${({ list }) => list && 0.7};
    }

    &:focus-visible {
        opacity: 0.8s;
        background-color: ${({ backgroundClr }) => backgroundClr};
    }

    & .MuiChip-deleteIcon {
        color: ${({ backgroundClr }) => getFontColor(backgroundClr || "")};
        transition: 0.3s all;
        width: 22px;
        height: 22px;
        stroke: transparent;

        @media (max-width: 1024) {
            width: 26px;
            height: 26px;
        }

        &:hover {
            opacity: 0.8;
        }
    }
`;

interface CategoryBadgeProps extends ChipProps, StyledBadgeProps {
    category: Category;
    emojiSizes?: [number, number];
}

export const  CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, emojiSizes, ...props }) => {
    const { user } = useContext(UserContext);
    const { emojisStyle, settings } = user;

    const emojiSize = emojiSizes 
        ? emojisStyle !== EmojiStyle.NATIVE 
            ? emojiSizes[0]
            : emojiSizes[1]
        : 20;

    return (
        <StyledCategoryBadge 
            key={category.id}
            label={category.name}
            variant="outlined"
            backgroundClr={category.color}
            glow={settings.enableGlow}
            translate="no"
            avatar={
                category.emoji ? (
                    <Avatar alt={category.name} sx={{ background: "transparent", borderRadius: "0px" }}>
                        <Emoji lazyLoad size={emojiSize} unified={category.emoji} emojiStyle={emojisStyle} />
                    </Avatar>
                ) : undefined
            }
            {...props}
        />
    )
};
