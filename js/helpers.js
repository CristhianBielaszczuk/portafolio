const createElement = ( element, classes, text ) => {
    const HTMLElement = document.createElement( element );

    ( typeof(classes) === 'string' ) ? 
        HTMLElement.classList.add(classes) : 
        HTMLElement.classList.add(...classes);

    if( text ) HTMLElement.textContent = text;

    return HTMLElement;
}

const createImage = ( object, className ) => {
    const img = createElement( 'img', className );
    img.src = `${ object.img }`;
    img.alt = `${ object.name }`;
    return img;
}

export const createDivWithImg = ( object, divClass, imgClass ) => {
    const div = createElement( 'div', divClass );
    const img = createImage( object, imgClass );
    div.append( img );
    return div;
}


// PROJECTS CARDS.
const btnClasses = index => [ 'button', 'button--projects', `button--projects-${ index }` ];

const createButton = ( project, index ) => {
    const button = createElement( 'a', btnClasses(index), 'Ver proyecto' );
    button.href = `${ project.link }`;
    button.target = '_blank';
    return button;
}

const addTechnologiesTo = ( cardDiv, project ) => {

    project.technologies.forEach( item => {
        const cardTechnology = createElement( 'h5', 'project-card__technology', item );
        cardDiv.append( cardTechnology );
    });

}

export const getProjectCardOf = ( project, index ) => {
    const card        = createElement( 'div', 'project-card' );
    const cardFigure  = createDivWithImg( project, 'project-card__figure', 'project-card__img' );
    const cardContent = createElement( 'div', 'project-card__content' );
    const cardName    = createElement( 'h4', 'project-card__name', `${ project.name }` );
    const cardTechnologies = createElement( 'div', 'project-card__technologies' );
    addTechnologiesTo( cardTechnologies, project );
    const button = createButton( project, index );

    cardContent.append( cardName, cardTechnologies, button );
    card.append( cardFigure, cardContent );

    return card;
}


// SKILLS CARDS.
export const getSkillCardOf = skill => {
    const card            = createElement( 'div', ['skills-card', 'card'] );
    const cardShadow      = createDivWithImg( skill, 'skills-card__shadow', 'skills-card__logo' );
    const cardTitle       = createElement( 'h4', 'skills-card__title', `${ skill.name }` );
    const cardDescription = createElement( 'p', 'skills-card__description', `${skill.description}` );
    card.append( cardShadow, cardTitle, cardDescription );
    return card;
}


// SERVICES CARDS.
export const getServiceCardOf = service => {
    const card      = createElement( 'div', [ 'services-card', 'card', 'card--services' ] );
    const cardImg   = createImage( service, 'my-services__img' );
    const cardTitle = createElement( 'h4', 'services-card__title', `${ service.name }` );
    const cardDesc  = createElement( 'p', 'services-card__description', `${ service.description }` );
    card.append( cardImg, cardTitle, cardDesc );
    return card;
}