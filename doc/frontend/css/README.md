# **About styles**

Here collected base information about styles and basic approaches to write CSS

## **Adaptivity**

Checkpoints of screen sizes:

- 0 - 480
- 481 - 768
- 769 - 992
- 993 - 1200
- 1201 - 1400
- 1401

CSS pattern:

```css
/* XS / Extra small */
@media only screen and (min-width: 0px) and (max-width: 480px) {

}

/* SM / Small */
@media only screen and (min-width: 481px) and (max-width: 768px) {

}

/* MD / Medium */
@media only screen and (min-width: 769px) and (max-width: 992px) {
   
}

/* LG / Large */
@media only screen and (min-width: 993px) and (max-width: 1200px) {
   
}

/* XL / Extra large */
@media only screen and (min-width: 1201px) and (max-width: 1400px) {

}

/* XXL / Extra extra large */
@media only screen and (min-width: 1401px) {

}
```
