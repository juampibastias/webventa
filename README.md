# JPBT — Landing de venta de servicios web

> Juan Pedro Bastias Torresi · Integrador Oficial de Mercado Pago

Landing page de conversión para vender servicios de desarrollo web, e-commerce, software y soluciones con IA. Construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS** e integración de pagos con **Mercado Pago**.

## Características

- Diseño dark moderno, responsive y optimizado para conversión.
- Secciones: Hero, Servicios, Por qué nosotros, Proceso, Planes, Testimonios, FAQ y Contacto.
- **3 planes de venta**: dos con pago online vía Mercado Pago y uno por cotización.
- Sello de **Integrador Oficial de Mercado Pago** en Hero, Planes y Contacto.
- Formulario de contacto que abre WhatsApp con el mensaje prearmado.
- Página de retorno `/gracias` para los estados de pago (aprobado / pendiente / rechazado).
- Todo el copy centralizado y editable en `lib/content.ts`.

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # completá tus credenciales
npm run dev                  # http://localhost:3000
```

## Configurar Mercado Pago

1. Entrá a https://www.mercadopago.com.ar/developers/panel/app y creá una aplicación.
2. Copiá tu **Access Token** (Test para probar, Producción para cobrar real).
3. Pegalo en `.env.local` como `MP_ACCESS_TOKEN`.
4. Definí `NEXT_PUBLIC_SITE_URL` con tu dominio (o `http://localhost:3000` en local).

El flujo de pago vive en `app/api/checkout/route.ts`: crea una *preference* y redirige al checkout de Mercado Pago. Al volver, el cliente cae en `/gracias` según el resultado.

> Recomendado: para confirmar pagos de forma fiable, sumá un **webhook** de Mercado Pago (`/api/webhook`) que escuche notificaciones IPN y dispare el alta del proyecto / email. No incluido por defecto.

## Personalización rápida

Editá **`lib/content.ts`**:

- `site`: nombre, email, WhatsApp, agenda (Calendly), moneda.
- `pricing.plans`: nombres, precios (`priceLabel`), montos (`amount`) y qué planes son `online` vs `quote`.
- `services`, `whyUs`, `process`, `projects`, `faqs`: textos de cada sección.
- `mercadoPago`: textos del sello de Integrador Oficial, ruta de la insignia y del certificado.

Colores y tipografía: `tailwind.config.ts` y `app/globals.css`.

### Assets de Mercado Pago (`/public/mp`)

- `insignia-mp.svg`: insignia oficial (ya incluida).
- `certificado-mp.pdf`: tu certificado oficial. Copialo a esta ruta para que funcione el link "Ver certificado". Si el archivo no está, el link sigue apuntando ahí pero da 404.

## Deploy en Vercel

1. Subí el repo a GitHub.
2. Importalo en https://vercel.com.
3. Cargá las variables de entorno (`MP_ACCESS_TOKEN`, `NEXT_PUBLIC_SITE_URL`).
4. Deploy. Vercel detecta Next.js automáticamente.

## Estructura

```
app/
  layout.tsx          # metadata + fuente
  page.tsx            # ensambla todas las secciones
  globals.css         # estilos base y utilidades
  gracias/page.tsx    # retorno de Mercado Pago
  api/checkout/route.ts  # crea la preferencia de pago
components/            # Navbar, Hero, Services, Pricing, etc.
lib/content.ts        # TODO el contenido editable
```
