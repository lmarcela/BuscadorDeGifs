import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../../GifExpertApp';

describe('Pruebas en <GifExpertApp />',()=>{      

    test('debe mostrar <GifExpertApp /> correctamente', () => {     
        const wrapper=shallow(<GifExpertApp />); 
        expect(wrapper).toMatchSnapshot();
    })    

    test('debe de mostrar una lista de categorias', () => {     
        const categorias = ['ferdinand','puppy'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categorias}/>); 

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })

});


