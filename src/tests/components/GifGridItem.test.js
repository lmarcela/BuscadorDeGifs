import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />',()=>{
    const title = "Prueba de Titulo";
    const url = "https://imagen.jpg";
    
    const wrapper=shallow(<GifGridItem title={title} url={url}/>);   

    test('debe mostrar <GifGridItem /> correctamente', () => {     
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => { 
        const p = wrapper.find('p');    
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => { 
        const imagen = wrapper.find('img');    
        //console.log(imagen.props())
        expect(imagen.prop('src')).toBe(url);
        expect(imagen.prop('alt')).toBe(title);
    })

    test('debe de tener animate__slideInUp', () => { 
        const div = wrapper.find('div').at(1);    
        expect(div.prop('className').includes("animate__slideInUp")).toBe(true);
    })
});


