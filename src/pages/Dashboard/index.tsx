import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles'
import Repository from '../Repository';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="github explorer"/>
            <Title>Explorer repositórios no Github</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/18272524?s=460&u=4ff9892a2a685c8c9f15f6bf28dbcd904cbf1a0c&v=4" 
                         alt="Marcello Andrade">
                    </img>
                    <div>
                        <strong>repositorio</strong>
                        <p>detalhes</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/18272524?s=460&u=4ff9892a2a685c8c9f15f6bf28dbcd904cbf1a0c&v=4" 
                         alt="Marcello Andrade">
                    </img>
                    <div>
                        <strong>repositorio</strong>
                        <p>detalhes</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/18272524?s=460&u=4ff9892a2a685c8c9f15f6bf28dbcd904cbf1a0c&v=4" 
                         alt="Marcello Andrade">
                    </img>
                    <div>
                        <strong>repositorio</strong>
                        <p>detalhes</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>           
        </> 
    )
}

export default Dashboard;