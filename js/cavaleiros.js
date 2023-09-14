function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const dia = document.querySelector('#valor').value;
    const mes = document.querySelector('#valor2').value;
    var msg = window.document.getElementById('frase');
    const texto2 = document.querySelector("h2");
    //var p;

     data = "2023"+ "/" + mes + "/" + dia ;

    
    if (data >= '2023/05/21' && data <= '2023/06/20'){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
        
    } else if (data >= '2023/08/23' && data <= '2023/09/22'){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "O forte senso de confiança e superioridade de Milo. Milo é confiante e orgulhoso, e se importa muito com a honra e dignidade dos cavaleiros. Sempre seguro de si, é mais impassível do que a maioria dos outros Cavaleiros de Ouro. Ele tem uma natureza intensa e feroz, mas sempre preserva o próprio controle.";
    
    }else if (data >= '2023/06/21' && data <= '2023/07/22'){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Ele também é conhecido por fabricar caixões. Sua personalidade é bem única, assim como sua aparência. E, embora ele seja um Cavaleiro de Athena, sua lealdade é questionável, já que ele se põe em primeiro lugar. De acordo com o próprio, ele não está em lado nenhum.";
    
    }else if (data >= '2023/12/22' && data <= '2023/01/20'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Dohko de Libra. O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
    
    }else if (data >= '2023/08/23' && data <= '2023/09/22'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";

    } else if (data >= '2023/11/23' && data <= '2023/12/21'){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo.";
    
    }else if (data >= '2023/12/22') && (data <= '2023/01/20'){
        texto.innerHTML = "Leâo";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Aiolia de Leão (獅子座のアイオリア, Reo no Aioria) é umCavaleiro de Ouro do Século XX, irmão do cavaleiro de Sagitário da mesma época (Aioros), na série Os Cavaleiros do Zodíaco, de Masami Kurumada. É o Cavaleiro de Ouro que protege a Casa de Leão. Aiolia é o protagonista do mangá Episódio G(Spin-off)que narra a guerra contra os titãs e com os gigas.";
    } else if (data >= '2023/12/22' && data <= '2023/01/20'){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Shura de Capricórnio ( 山羊座 のシュラ , Kapurikōn no Shura?) é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
    
    } else if (data >= '2023/01/21' && data <= '2023/02/18'){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Camus é um cavaleiro justo, porém leal ao Santuário, com um profundo conhecimento sobre os cavaleiros e as ocorrências. Apesar de suspeitar da maldade do mestre, sempre adotou uma postura neutra, não tomando partido quando da traição de Hyoga ou da dominação satânica de seu discípulo, o Cavaleiro de Cristal.";
        
    } else if (data >= '2023/04/21' && data <= '2023/05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML= "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. Sendo um Cavaleiro de Ouro, Aldebaran é um dos Cavaleiros mais poderosos do Exército de Atena.";
   
    } else if (data >= '2023/09/23' && data <= '2023/10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Dohko de Libra. O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
    
    } else if (data >= '2023/03/21' && data <= '2023/04/20'){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
   
    } else if (data >= '2023/02/19' && data <= '2023/03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML="Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas. É um dos Cavaleiros mais poderosos do exército de Atena.";
   
    }else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
        
    }
}