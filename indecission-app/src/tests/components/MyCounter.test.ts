import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import  MyCounter  from "@/components/MuyCounter.vue"

describe('MyCounter Component', () => {

    test('should be tested', () => {
        
        const wrapper = mount(MyCounter, {
            props: { 
                value: 10, 
            }
        });
        expect(wrapper.html()).toMatchSnapshot();

    });
});