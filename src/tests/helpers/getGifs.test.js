import {getGifs} from '../../helpers/getGifs';

describe('Pruebas en helper getGifs (fetch)',()=>{

    test('debe de traer 9 elementos', async() => {     
        const gifs = await getGifs('ferdinand');
        expect(gifs.length).toBe(9);
    })

    test('debe de traer 0 elementos', async() => {     
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })

});


