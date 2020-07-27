import {useFetchGifs} from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en Hook useFetchGifs',()=>{

    test('debe de retornar el estado inicial', async() => {    
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs('category') );
        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un arreglo de imágenes y el loading en false', async() => { 
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs('oso') );
        await waitForNextUpdate();
        const {data, loading} = result.current;
                
        expect(data.length).toBe(9);
        expect(loading).toBe(false);        
    })

});


