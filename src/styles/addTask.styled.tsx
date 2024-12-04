import styled from "@emotion/styled"
import { Button, TextField } from "@mui/material"
import { getFontColor } from '../utils'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
`;

export const AddTaskButton = styled(Button)`
    margin-top: 4px;
    border: none;
    padding: 16px 32px;
    font-size: 24px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => getFontColor(theme.primary)};
    border-radius: 999px;
    font-weight: bold;
`;