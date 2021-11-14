import './styles.css';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import ResultLoader from './ResultLoader';

type FormData = {
  perfil: string;
};

type GitProfile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [gitProfile, setGitProfile] = useState<GitProfile>();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    perfil: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.perfil}`)
      .then((response) => {
        setGitProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitProfile(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>   
        <div className="form-container">      
            <input
              type="text"
              name="perfil"
              value={formData.perfil}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
           
            <button type="submit" className="btn">
              Encontrar
            </button>
            </div>
            </form>      
      </div>

      
      {isLoading ? (
        <ResultLoader />
      ) : (
        gitProfile && (
          <div className="search-results">
            <div className="search-results-image">
              <img src={gitProfile.avatar_url} alt="Avatar do Perfil" />
            </div>
            <div className="search-results-details">
              <h1>Informações</h1>              
              <ResultCard title="Perfil:" description={gitProfile.url} />
              <ResultCard
                title="Seguidores:"
                description={gitProfile.followers}
              />
              <ResultCard
                title="Localidade:"
                description={gitProfile.location}
              />
              <ResultCard title="Nome:" description={gitProfile.name} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default GitSearch;
