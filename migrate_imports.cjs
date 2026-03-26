const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');

// Dictionary of component file base names (without extension) mapped to their new absolute alias paths
const componentMap = {
  // app
  "main": "@app/main",
  "AppContext": "@app/context/AppContext",
  "languageContext": "@app/context/languageContext",
  "router": "@app/router/router",

  // pages
  "Home": "@pages/Home",
  "NotFound": "@pages/NotFound",
  "LayoutPrincipal": "@pages/layout/LayoutPrincipal",
  "Navigation": "@pages/layout/Navigation",
  "Footer": "@pages/layout/Footer",

  // shared
  "EncabezadoSeccion": "@shared/components/EncabezadoSeccion",
  "UtilityButtons": "@shared/components/UtilityButtons",
  "LoaderMobile": "@shared/components/loaders/LoaderMobile",
  "LoaderWeb": "@shared/components/loaders/LoaderWeb",
  "useTranslation": "@shared/hooks/useTranslation",

  // features - educacion
  "SeccionEducacion": "@features/educacion/SeccionEducacion",
  "CertificadosScroll": "@features/educacion/components/CertificadosScroll",
  "ColumnaHeader": "@features/educacion/components/ColumnaHeader",
  "EducacionItem": "@features/educacion/components/EducacionItem",
  // Note: modalInspeccion exists in both educacion and proyectos. We have to be careful.
  "ModalInspeccionEdu": "@features/educacion/components/ModalInspeccion", 

  // features - experiencia
  "SeccionExperiencia": "@features/experiencia/SeccionExperiencia",
  "ExperienciaUnidad": "@features/experiencia/components/ExperienciaUnidad",
  "InfoMeta": "@features/experiencia/components/InfoMeta",
  "RegistryDeployment": "@features/experiencia/components/RegistryDeployment",
  "StackTechRegistry": "@features/experiencia/components/StackTechRegistry",
  "TimeLinePuestos": "@features/experiencia/components/TimeLinePuestos",

  // features - gitProyectos
  "SeccionGitProyectos": "@features/gitProyectos/SeccionGitProyectos",
  "CalendarioGithub": "@features/gitProyectos/components/CalendarioGithub",
  "DeployBadge": "@features/gitProyectos/components/DeployBadge",
  "LenguajesGithub": "@features/gitProyectos/components/LenguajesGithub",
  "MetricasGithub": "@features/gitProyectos/components/MetricasGithub",
  "PerfilGithub": "@features/gitProyectos/components/PerfilGithub",
  "RepositoriosCarrusel": "@features/gitProyectos/components/RepositoriosCarrusel",

  // features - herramientas
  "SeccionHerramienta": "@features/herramientas/SeccionHerramienta",
  "CarruselInfinito": "@features/herramientas/components/CarruselInfinito",
  "CartaTecnologias": "@features/herramientas/components/CartaTecnologias",
  "HabilidadesConsola": "@features/herramientas/components/HabilidadesConsola",
  "MenuNavegacionStack": "@features/herramientas/components/MenuNavegacionStack",
  "VisorTecnologico": "@features/herramientas/components/VisorTecnologico",

  // features - perfil
  "MiCartaPerfil": "@features/perfil/MiCartaPerfil",
  "FooterProfile": "@features/perfil/components/FooterProfile",
  "HeaderProfile": "@features/perfil/components/HeaderProfile",
  "NavProfile": "@features/perfil/components/NavProfile",

  // features - proyectos
  "CartaCabecera": "@features/proyectos/components/CartaCabecera",
  "CartaCuerpo": "@features/proyectos/components/CartaCuerpo",
  "CartaFooter": "@features/proyectos/components/CartaFooter",
  "ModalInspeccionProy": "@features/proyectos/components/ModalInspeccion", 
  "ProyectoCarta": "@features/proyectos/components/ProyectoCarta",
  "VisorImagenes": "@features/proyectos/components/VisorImagenes",

  // features - sobreMi
  "SeccionSobreMi": "@features/sobreMi/SeccionSobreMi",
  "CoreStack": "@features/sobreMi/components/CoreStack",
  "ItemParrafoSobreMi": "@features/sobreMi/components/ItemParrafoSobreMi",
  "TextoConHighlights": "@features/sobreMi/components/TextoConHighlights",

  // backends
  "firebase": "@backend/config/firebase",
  "useEducacionData": "@backend/hooks/useEducacionData",
  "useExperienciaData": "@backend/hooks/useExperienciaData",
  "useGithubData": "@backend/hooks/useGithubData",
  "useProyectosData": "@backend/hooks/useProyectosData",
  "educacionRepository": "@backend/repositories/educacionRepository",
  "experienciaRepository": "@backend/repositories/experienciaRepository",
  "githubRepository": "@backend/repositories/githubRepository",
  "herramientasRepository": "@backend/repositories/herramientasRepository",
  "proyectosRepository": "@backend/repositories/proyectosRepository",
  "firestoreService": "@backend/services/firestoreService",
  "githubService": "@backend/services/githubService",
  "experienciaData": "@backend/data/experiencia/experienciaData",
  "educacionData": "@backend/data/educacion/educacionData",
  "footerData": "@backend/data/footer/footerData",
  "herramientasData": "@backend/data/herramientas/herramientasData",
  "perfilData": "@backend/data/perfil/perfilData",
  "proyectosData": "@backend/data/proyectos/proyectosData",
  "sobreMiData": "@backend/data/sobreMi/sobreMiData",
  "iconsRegistro": "@backend/data/icons/iconsRegistro",
  "dataIconify": "@backend/data/icons/icon-iconify/dataIconify"
};

// Also we need to map old filenames (camelCase) to the new PascalCase ones so the regex catches them
const oldToAlias = {
  "seccionEducacion": "@features/educacion/SeccionEducacion",
  "certificadosScroll": "@features/educacion/components/CertificadosScroll",
  "columnaHeader": "@features/educacion/components/ColumnaHeader",
  "educacionItem": "@features/educacion/components/EducacionItem",
  "seccionExperiencia": "@features/experiencia/SeccionExperiencia",
  "experienciaUnidad": "@features/experiencia/components/ExperienciaUnidad",
  "infoMeta": "@features/experiencia/components/InfoMeta",
  "registryDeployment": "@features/experiencia/components/RegistryDeployment",
  "stackTechRegistry": "@features/experiencia/components/StackTechRegistry",
  "timeLinePuestos": "@features/experiencia/components/TimeLinePuestos",
  "seccionGitProyectos": "@features/gitProyectos/SeccionGitProyectos",
  "calendarioGithub": "@features/gitProyectos/components/CalendarioGithub",
  "deployBadge": "@features/gitProyectos/components/DeployBadge",
  "lenguajesGithub": "@features/gitProyectos/components/LenguajesGithub",
  "metricasGithub": "@features/gitProyectos/components/MetricasGithub",
  "perfilGithub": "@features/gitProyectos/components/PerfilGithub",
  "repositoriosCarrusel": "@features/gitProyectos/components/RepositoriosCarrusel",
  "seccionHerramienta": "@features/herramientas/SeccionHerramienta",
  "carruselInfinito": "@features/herramientas/components/CarruselInfinito",
  "cartaTecnologias": "@features/herramientas/components/CartaTecnologias",
  "habilidadesConsola": "@features/herramientas/components/HabilidadesConsola",
  "menuNavegacionStack": "@features/herramientas/components/MenuNavegacionStack",
  "visorTecnologico.jsx": "@features/herramientas/components/VisorTecnologico",
  "visorTecnologico": "@features/herramientas/components/VisorTecnologico",
  "miCartaPerfil.jsx": "@features/perfil/MiCartaPerfil",
  "miCartaPerfil": "@features/perfil/MiCartaPerfil",
  "footerProfile": "@features/perfil/components/FooterProfile",
  "headerProfile": "@features/perfil/components/HeaderProfile",
  "navProfile": "@features/perfil/components/NavProfile",
  "cartaCabecera": "@features/proyectos/components/CartaCabecera",
  "cartaCuerpo": "@features/proyectos/components/CartaCuerpo",
  "cartaFooter": "@features/proyectos/components/CartaFooter",
  "proyectoCarta": "@features/proyectos/components/ProyectoCarta",
  "visorImagenes": "@features/proyectos/components/VisorImagenes",
  "seccionSobreMi": "@features/sobreMi/SeccionSobreMi",
  "coreStack": "@features/sobreMi/components/CoreStack",
  "itemParrafoSobreMi": "@features/sobreMi/components/ItemParrafoSobreMi",
  "textoConHighlights": "@features/sobreMi/components/TextoConHighlights",
  "encabezadoSeccion": "@shared/components/EncabezadoSeccion",
  "utilityButtons": "@shared/components/UtilityButtons",
  "loaderMobile": "@shared/components/loaders/LoaderMobile",
  "loaderWeb": "@shared/components/loaders/LoaderWeb",
  "index": "@pages/Home",
  "pag404": "@pages/NotFound",
  "footer": "@pages/layout/Footer",
  "navigation": "@pages/layout/Navigation",
  "layoutPrincipal": "@pages/layout/LayoutPrincipal"
};

// Combine both maps
const fullMap = { ...componentMap, ...oldToAlias };

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
        if (!filePath.includes('node_modules')) {
            getAllFiles(filePath, fileList);
        }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let dirty = false;

  // Regex to find all import statements
  // e.g. import Somethng from '../../../feats/educacion/seccionEducacion'
  // e.g. import { algo } from '../components/cartaCuerpo.jsx'
  const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
  
  content = content.replace(importRegex, (match, importPath) => {
    // Check if it's a relative path
    if (importPath.startsWith('.') || importPath.includes('frontend/') || importPath.includes('backend/')) {
       // Extract the base file name without extension
       const baseName = path.basename(importPath, path.extname(importPath));
       
       // Handle special case for "modalInspeccion"
       if (baseName === "modalInspeccion" || baseName === "ModalInspeccion") {
            if (importPath.includes('proyectos')) {
                dirty = true;
                return match.replace(importPath, "@features/proyectos/components/ModalInspeccion");
            } else if (importPath.includes('educacion')) {
                dirty = true;
                return match.replace(importPath, "@features/educacion/components/ModalInspeccion");
            }
       }
       
       // If it's a style import (e.g. from '../../style/styles.css')
       if (importPath.includes('style/') && importPath.endsWith('.css')) {
           dirty = true;
           return match.replace(importPath, "@shared/style/styles.css");
       }
       
       if (importPath.includes('static/') && importPath.endsWith('.jsx')) {
           dirty = true;
           return match.replace(importPath, "@shared/static/fondo");
       }

       if (fullMap[baseName]) {
           dirty = true;
           return match.replace(importPath, fullMap[baseName]);
       }
    }
    return match;
  });
  
  // also fix some dynamic imports like React.lazy(() => import('../../page/pag404'))
  const dynamicImportRegex = /import\(['"]([^'"]+)['"]\)/g;
  content = content.replace(dynamicImportRegex, (match, importPath) => {
    if (importPath.startsWith('.')) {
       const baseName = path.basename(importPath, path.extname(importPath));
       if (fullMap[baseName]) {
           dirty = true;
           return match.replace(importPath, fullMap[baseName]);
       }
    }
    return match;
  });

  if (dirty) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated imports in ${file}`);
  }
});

console.log('Migration complete.');
