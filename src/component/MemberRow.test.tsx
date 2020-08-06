import * as React from 'react';
import {mount, ReactWrapper} from "enzyme";
import {StyledMemberRow} from "./MemberRow";
import {StyledMemberList} from "./MemberList";

describe('MembersList test',()=>{

    let subject: ReactWrapper;

    let clicSpy: jest.Mock;

    beforeEach(()=>{
        clicSpy = jest.fn();;
        subject = mount(<StyledMemberList/>)
    })

    test('renders',()=>{
        expect(subject.exists()).toBeTruthy();
    })

    test('renders a single row of data',()=>{
        expect(subject.find('.memberRowData').text()).toBe('ABRAMS, JOSEPH L')
    })

    test('should a form with member fields',()=>{
        expect(subject.find('.memberForm')).toBeTruthy();
    })

    test('should display a submit button',()=>{
        expect(subject.find('.subitBtn')).toBeTruthy();
    })

})