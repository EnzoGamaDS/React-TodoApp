import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Pagina_1 } from '../pages/Pagina_1';
import { Pagina_2 } from '../pages/Pagina_2';

export const AppRoutes: React.FC = () => {
    return (
        <Switch>

            <Route path='/page_1' element={<Pagina_1 />} />

            <Route path="/page_2" element={<Pagina_2 />} />

            <Route path="*" element={<Navigate to="/page_1" />} />

        </Switch>
    )
}
