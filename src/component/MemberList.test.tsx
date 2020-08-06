import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import {StyledMemberList} from "./MemberList";

describe('MembersList test',()=>{

    let subject: ReactWrapper;

    beforeEach(()=>{
        subject=mount(<StyledMemberList/>)
    })

    test('renders',()=>{
        expect(subject.exists()).toBeTruthy();
    })

    test('should have a button',()=>{
        subject.find('.fetchBtn').simulate('click')
        expect(subject.find('.memberRow')).toBeTruthy();
    })
})
