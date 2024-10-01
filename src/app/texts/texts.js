const title = "Merca Éxito";
const email = "leopapa1950@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre lo que ofrecen. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3114737942";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Merca éxito, nos enorgullecemos de ofrecer una experiencia de compra completa con una amplia variedad de productos de mercado. Desde alimentos frescos hasta artículos para el hogar, nuestro objetivo es satisfacer todas tus necesidades en un solo lugar. Nuestro compromiso es brindar calidad y variedad en cada pasillo. Trabajamos con proveedores confiables para asegurar que cada producto cumple con los más altos estándares de calidad, garantizando que encuentres lo que buscas, siempre.\n" +
            "En Merca éxito, no sólo te ofrecemos productos de primera necesidad, sino también un servicio al cliente excepcional. Nuestro equipo está dedicado a hacer que tu experiencia de compra sea agradable y eficiente. Visítanos y descubre porque somos la opción preferida para todas tus compras. ¡ En Merca éxito, la variedad y calidad están al alcance de tu mano!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Merca Éxito",
            p2: "Todo Bueno, Bonito y Barato",
        },
        address: "Dirección del emprendimiento",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565670839042&locale=es_LA",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
