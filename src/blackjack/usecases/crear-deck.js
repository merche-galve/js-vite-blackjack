import _ from "underscore";

//export const miNombre = 'Merche';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tipoEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tipoEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tipoEspeciales || tipoEspeciales.length === 0)
        throw new Error('tipoEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log(deck);

    return deck;
}

//export default crearDeck;