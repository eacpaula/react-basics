import React from 'react'
import SixthComponentMember from "./SixthComponentMember";

/**
 * This component is an example of the child of another component
 */
export default (props) =>
    <div>
        <SixthComponentMember name="Evandro" lastname="Antonio da Costa de Paula"/>
        <SixthComponentMember name="Johanna" lastname="Liz dos Santos de Oliveira"/>
        <SixthComponentMember name="Daniel" lastname="Ambos da Silva"/>
        <SixthComponentMember name="Mauren" lastname="Albert"/>
    </div>