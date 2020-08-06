import React from "react";
import styled from "styled-components";

interface Props{
    rowData: string;
    key:any;
    className?: string;
}

const MemberRow: React.FC<Props> = props => {

    return(
        <div className={"memberRowData"}>
            {(props.rowData)}
        </div>
    )
};

export const StyledMemberRow = styled(MemberRow) ``;