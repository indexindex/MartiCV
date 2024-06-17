import { useAppContext } from '../context';
import { useRouter } from 'next/router';
const Pricing = () => {
  const { state, dispatch } = useAppContext();
  const router = useRouter();

  const handleSelectPlan = (plan) => {
    dispatch({ type: 'SET_PLAN', payload: plan });
    router.push('/contacts#section-contacts');
  };

  return (
    <div className="section pricing" id="section-pricing">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Pricing Table</div>
        </div>
        {/* pricing items */}
        <div className="pricing-items">
          <div className="pricing-col">
            <div className="pricing-item content-box">
              <div className="icon">
                <span className="fas fa-star" />
              </div>
              <div className="name">Basic</div>
              <div className="amount">
                <span className="number">
                  <span className="dollar">€</span>
                  <span>45</span>
                  <span className="period">hour</span>
                </span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Photography</li>
                  <li>Lightroom Photo Editing</li>
                  <li>Graphic Design</li>
                  <li className="disable">Videography</li>
                  <li className="disable">Davinci Video Production</li>
                </ul>
              </div>
              <div className="bts">
                <p
                  className="btn hover-animated"
                  onClick={() => handleSelectPlan('Basic')}
                >
                  <span className="circle" />
                  <span className="lnk">Select</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pricing-col">
            <div className="pricing-item content-box">
              <div className="icon">
                <span className="fas fa-rocket" />
              </div>
              <div className="name">Premium</div>
              <div className="amount">
                <span className="number">
                  <span className="dollar">€</span>
                  <span>59</span>
                  <span className="period">hour</span>
                </span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Videography</li>
                  <li>Photography</li>
                  <li>Lightroom Photo Editing</li>
                  <li>Davinci Video Production</li>
                  <li>Advertising <strong>new</strong></li>
                </ul>
              </div>
              <div className="bts">
                <p
                  className="btn hover-animated"
                  onClick={() => handleSelectPlan('Premium')}
                >
                  <span className="circle" />
                  <span className="lnk">Select</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
