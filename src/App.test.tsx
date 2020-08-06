import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import App from "./App";

describe('App Test',()=>{
  test('renders',()=>{
    let subject: ReactWrapper;
    subject = mount(<App/>)
    expect(subject.exists()).toBeTruthy();
  })
})
