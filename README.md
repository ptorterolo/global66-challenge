# global66-challenge
## Sobre el desarrollo 

Comencé analizando el diseño, observando cada pantalla y los elementos presentes en ellas. Esto me permitio identificar bloques o secciones que podría modularizar (Atomic Design).
Luego entender como interactúan estos módulos entre sí y con ello formar un pequeño mapa de las funciones macro a desarrollar.
* Obtener listado de pokemones
* Obtener data de un solo pokemon
* Implementar infinite scrolling 
* Salvar y recuperar favoritos
Posteriormente dediqué un tiempo a leer la documentación de la api y su uso. 
Ya con el desarrollo en curso me encontré puliendo estas ideas principales y realizando correcciones, por ejemplo:
* En un primer momento había decidido utilizar el store solo para los favoritos y recuperar el listado de pokemons de la referencia proveniente del composable. Finalmente esto no fue así, y en el store se almacenan tanto favoritos como listado de pokemones, quedando el composable dedicado solo para lógica de recupero de información.

En cuanto al maquetado utilice TailwindCss una librería con la que me siento cómodo trabajando. Intente hacer un trabajo pixel perfect respetando los tamaños de los objetos en el figma, no obstante en algunos casos existe una diferencia de algunos pixeles por los valores default con los que trabaja tailwind. Si bien sé que pueden sobreescribirse los mismos decidé no hacerlo para poder continuar el desarrollo y respetar los tiempos de entrega.
La diferencia en el resultado como comentaba es de unos pocos píxeles.

La animación de la pokebola fue otro momento notable porque deseaba otorgar una buena referencia a la serie; así que busqué referencias en la web, vi varios videos y realice algunos intentos para lograr una animación de complejidad alta, pero al encontrarme consumiendo más tiempo del esperado decidí ir por algo más sencillo y funcional.

Para finalizar generé testings unitarios para los componentes. Este topic es relativamente nuevo para mí y me encuentro en proceso de capacitación para realizar mejores pruebas en el futuro. 

## Uso

1. Clonar el repositorio: 
```
  git clone https://github.com/ptorterolo/global66-challenge
```

2. Situarse en la carpeta Global66 Challenge: 
```
  cd global66-challenge
  ```

3. Instalar dependencias del proyecto: 
```  
  npm install
  ```


4. Correr el proyecto localmente
```
  npm run dev
```

5. Correr los testings
```
  npm run test:unit
```