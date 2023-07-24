import type { ContactInfo } from "~/validation/contactInfo";

const getHtmlCode = (input: ContactInfo) => {
    const html = `<!DOCTYPE html>
    <html lang="en" style="font-family: 'Roboto'; line-height: 1.5; box-sizing: border-box;">
          <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="display: grid; min-height: 100vh; grid-template-rows: repeat(6, minmax(0, 1fr)); text-align: center; margin: 0;">
            <p style="display: grid; width: 100%; align-items: center; background-color: teal; font-size: 3rem; /* 48px */line-height: 1; font-weight: 700; color: white; margin: 0;" align="center">
              PERSIANAS 247
            </p>
            <div style="display: grid; grid-row: span 4 / span 4; place-content: space-around;">
              <p style="font-weight: 700; align-self: flex-end; font-size: 2.25rem; line-height: 2.5rem; color: teal;" align="center">
                Nuevo formulario de contacto
              </p>
              <div style="display: grid; place-content: center;">
                <p style="font-weight: 700; color: teal; font-size: 1.5rem; /* 24px */line-height: 2rem;" align="center">
                  Nombre
                </p>
                <p style="width: 24rem; overflow-wrap: break-word; font-size: 1.25rem; /* 20px */line-height: 1.75rem; border-color: rgb(0 0 0); border-style: solid; border-width: 1px;" align="center">
                  ${input.name}
                </p>
              </div>
              <div style="display: grid; place-content: center;">
                <p style="font-weight: 700; color: teal; font-size: 1.5rem; /* 24px */line-height: 2rem;" align="center">
                  Email
                </p>
                <p style="width: 24rem; overflow-wrap: break-word; font-size: 1.25rem; /* 20px */line-height: 1.75rem; border-color: rgb(0 0 0); border-style: solid; border-width: 1px;" align="center">
                  ${input.email}
                </p>
              </div>
              <div style="display: grid; place-content: center;">
                <p style="font-weight: 700; color: teal; font-size: 1.5rem; /* 24px */line-height: 2rem;" align="center">
                  Whatsapp
                </p>
                <p style="width: 24rem; overflow-wrap: break-word; font-size: 1.25rem; /* 20px */line-height: 1.75rem; border-color: rgb(0 0 0); border-style: solid; border-width: 1px;" align="center">
                  ${input.number}
                </p>
              </div>
              <div style="display: grid; place-content: center;">
                <p style="font-weight: 700; color: teal; font-size: 1.5rem; /* 24px */line-height: 2rem;" align="center">
                  Mensaje
                </p>
                <p style="width: 24rem; overflow-wrap: break-word; font-size: 1.25rem; /* 20px */line-height: 1.75rem; border-color: rgb(0 0 0); border-style: solid; border-width: 1px;" align="center">
                  ${input.message}
                </p>
              </div>
            </div>
            <div style="background-color: teal; height: 100%;"></div>
          </body>
        </html>
    
    `
    return html;
}

export default getHtmlCode;