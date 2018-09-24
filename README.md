* PROBLEMA
Decidiste abandonar Marte después de que el último colapso solar dejó al 99.98% de los
marcianos con el 0.02% de la riqueza. Afortunadamente, con la escasa suma de dinero que
quedó, puedes rentar un bus espacial, dejar Marte, y viajar alrededor del Universo Kudert
para vender comida (que aparentemente es muy costosa).

Para comprar y vender alrededor de la del Universo Kudert necesitas convertir números y
unidades, así que decidiste escribir un programa que te ayude.Los números usados para las transacciones universales siguen una convención similar a la
de los números marcianos y con mucho esfuerzo has recolectado la traducción apropiada
entre ellos.

Los números marcianos están basados en siete símbolos:

** 
| Simbolo | Valor |
|--------+-------|
| I      |     1 |
| V      |     5 |
| X      |    10 |
| L      |    50 |
| C      |   100 |
| D      |   500 |
| M      |  1000 |

Los números se forman combinando símbolos y sumando sus valores. Por ejemplo, MMVI
es 1000 + 1000 + 5 + 1 = 2006. Generalmente, los símbolos están ordenados por valor,
empezando con los de mayor valor. Cuando un valor menor antecede a uno mayor, el valor
menor se resta del mayor, y el resultado se suma al total. Por ejemplo MCMXLIV = 1000 +
(1000 − 100) + ( 50 − 10) + (5 − 1) = 1944.
#+BEGIN_QUOTE
● Los símbolos “I”, “X”, “C” y “M” pueden repetirse hasta tres veces sucesivamente.
(Pueden aparecer cuatro veces si el tercero y cuarto están separados por un valor
menor, como en XXXIX). “D”, “L” y “V” no se pueden repetir.

● “I” sólo puede restarse de “V” y “X”. “X” sólo puede restarse de “L” y “C”. “C” sólo
puede restarse de “D” y “M”. “V”, “L” y “D” nunca pueden restarse.

● Sólo un símbolo de menor valor puede restarse de cualquier símbolo de mayor valor.

● Un número arábigo puede ser descompuesto en dígitos. Por ejemplo, 1903 está
compuesto de 1, 9, 0 y 3. Para escribir el número romano, cada uno de los dígitosexcepto el cero debe ser tratado por separado. En el ejemplo anterior, 1000=M, 900
= CM y 3 = III. Por lo tanto, 1903 = MCMIII.
#+END_QUOTE 

** Entrada de prueba:
#+BEGIN_SRC -n
pouet is I
plouf is V
cuic is X
boum is L
pouet pouet Empanada is 68 Dollars
pouet plouf Ceviche is 115600 Dollars
cuic cuic Hornado is 15640 Dollars
how much is cuic boum pouet pouet ?
how many Dollars is pouet plouf Empanada ?
how many Dollars is pouet plouf Ceviche ?
how many Dollars is pouet plouf Hornado ?
how much bread enters in a bakery during a full-moon night?
#+END_SRC
 
** Entrada de prueba:
#+BEGIN_SRC -n 
cuic boum pouet pouet is 42
pouet plouf Empanada is 136 Dollars
pouet plouf Ceviche is 115600 Dollars
pouet plouf Hornado is 3128 Dollars
What are you talking about really?
#+END_SRC

# Requisitos
nodejs v10.9.0 y npm v6.2.0
Intalar jest
npm install jest

# Ejecución
Dirigirse al path src y ejecutar
node index.js

# Clonar
$git clone 
 