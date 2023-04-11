const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const saveApiData = require("../controllers/saveApiData");
const getCountries = require("../controllers/getAllChars");
const getCountryByID = require("../controllers/getById");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/saveall", saveApiData);
router.get("/countries/:id", getCountryByID);
router.get("/countries");

router.get("/countries", async (req, res) => {
  const name = req.query;
  try {
    const countries = name ? await getCountries(name) : await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/*
Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /countries/:idPais**
-  Tiene que incluir los datos de las actividades turísticas asociadas a este país.

#### **📍 POST | /activities**

-  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

#### **📍 GET | /activities**

-  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

*/

module.exports = router;
