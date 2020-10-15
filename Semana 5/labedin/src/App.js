import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import photo from './imgs/foto.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={photo}
          nome="Thomas Arantes" 
          descricao="Oi, eu sou o Thomas. Atualmente estudo na Labenu. Sou graduado em Artes e Design pela Universidade Federal de Juiz de Fora, sou muito bom em modelagem 3d com o Blender."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <div className="small-card-section">
          <CardPequeno
            icone="https://i2.wp.com/www.whbrasil.org/wp-content/uploads/2019/09/Icone-email-1-preto.png?ssl=1"
            email="E-mail" 
            descricao="thomas-arantes@labenu.com"
          />
        </div>
      </div>

      <div>
        <div className="small-card-section">
          <CardPequeno
            icone="data:image/png;base64,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"
            email="Endereço" 
            descricao="Rua Labenu 189"
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Educação</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0?e=2159024400&v=beta&t=NRNnB4OsKbfz2i_OVjaIigRiKqCI-k80WqKAnOpbLRw" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEWpABf///+lAACoABSmAAD+/PmwIhSiAACnAAvBYFSoABP039TTlY/rzsjoxbrcqZ7apJutGh388unu3Nz69PT/+vTz49+nAA7XpajKhonjwsOsAACuJi3z39iyLyX04NW3Qz3Ng3m4SknQi4DguLXFd3jQjYfKfHTKeGzBYlvv19K6TESzMy68Tj68VlTGdG7fsqqvJSbFaly+Y2e0MBmrFyKxMzuxNz7AaW/TmZa2PjfRko7gu7rTkob56+HWnJW4PSezDN2uAAAEn0lEQVR4nO3bcVfqNhgGcJOmJBYVWilVCl6ZXBnqBKfXTTf1fv9PtSYp0BZo5+RA0j2/v0BezslD2zRJ48EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8XcRoorqE7ag928boL1ejXu97SUTBX4ezXu/ayogeHXeJ9CvfVOLQyUCVtMuPs5lE44Zot9GGEo+dpCXnFh5DcRemrSd9b32JF7/PS37b9COYy2MyoNvpuCRgztoShw3mJSReX2IympyiJ/cxi++msw1nIB8RcjxpMHYxPbHvMqRXsoMRjuxvNrReTAg5Ki8xmCdcMtrYg2r8nQwqSgxGPwi5KO88xO+ETC3sQVM8IG7F8UkuVPdiQydrvuiWkG/lCb2HpBuNd9Se7aNtQprlCdmYkI7FCbuVx5Ce2JzQ8ZK7fVCekCc/gtuw7z6vRZfJWCUsTejEyUDG3p5G3ggIKU0o+yJCLu0bjWrsSja/9CITj7LkUeyqSVtGz2Tzn8pOQTqVJVNjR2uek/Cc/F/SQJHn0JmaEAlVFeky9amTvk5KxrJkSHWJcZej9+z7sd//kYnYF5GeBarPRrL518JPPDyrMq8fM8Z8/fr5hy/e1Mye6ZJNE8i94d0wfA8z51j0BwlCfeHFJAzTqW8YqpctWUZPg263S/6UF14curkSlxg3eaLHJN9PeP1F5xmTIp1Qf+VVdp5xUCwxL6FeXVn29Y4fLhKevQzHTdXsM2k2morCV8TL2XCs3g9edMmVaXMM2pLNy9yvHRYsBjGUMa6a3+ZUUUc6TfiqvsIo42359jgtMS3gPGFmzBUH2WGajtOiJV+hOqFpZ+ecbl527sNyQ237E7Ij2bxOIWGzfgkzV091wg8bE2aG1pUJ9VcsTkhP656QIyH7y8KEN59KeG5hwiYSIiES7tFqwvz9kDerE/bMTnhe7EvzI2+dMDetFYfrElasi++PTlgctd18PmHFs439Yd+LCeWWg+UpZ3/C6LAwt/DkKsbfNUroPeWbqx9UvC0S25/wgMrmkfvFWhu7Tt5OFm/5YKWjXJ/w3diE/Jts38fytLyRixqLQ8o78uPTbPNXEqrVxYoncHuk79eL9tFJ8m60PGQ1SBi9qtO0zVWD6YVcLc08KaMqYTe7Rrg+YfkTuL3SC0tkxjilfCoDZjcXxtUJ9XlucML5Ci85bvXUGn1ue5B8vpt0I/8ioXFLwUuOvhTnjrL9ptNQCYPsbryVhPrZhdEb9uhdO907+d56yI2gvUviBkkCvyxh8gskJT9Ne6yW41HOnm4PfybXYqGdfswTjeyfigmdhiyJ/R219b/zos3Pb3MnYDGh/tTkc/SzVhLWDhLaDwnt9z9IOKl7wuJqYv2ky3PWbpmttvpArm7SVfw6J1TzyZmpq/hbIB9sEDI0eMb7Vfr/8O6Mng5+id68OKjxIaRDmdC4LYjbo/YukqDG/Yzea3lv6878KhHlalP3sK6HMLptyVPUNfc/D76KyV2J7syvbcAD8dh7m8TFBcdaEZSJ+k6aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB24B8hJEaiRRhbZgAAAABJRU5ErkJggg==" 
          nome="UFJF" 
          descricao="Bacharelado Interdisciplinar em Artes e Design" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
