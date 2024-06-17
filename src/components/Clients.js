const Clients = () => {
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Clients</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="clients-items">
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://koffeesti.ee/">
                  <img src="images/client-1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/brendancetantsustuudio/">
                  <img src="images/client-2.png" alt="" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://www.malwarebytes.com/">
                  <img src="images/client-3.png" alt="" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <img src="images/client-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Clients;
