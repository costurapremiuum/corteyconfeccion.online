import { subscriptionPlans } from '../data/subscription';

export default function SubscriptionSection() {
  return (
    <section className="py-20 px-6 bg-[#222222] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">
          Acceso Exclusivo
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          {subscriptionPlans.title}
        </h2>
        <p className="text-[#E0DCD3]/80 text-lg mb-10 max-w-2xl mx-auto">
          {subscriptionPlans.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {subscriptionPlans.plans.map((plan) => (
            <div key={plan.id} className="bg-[#2D2D2D] p-8 rounded-3xl border border-[#3D3D3D] hover:border-[#D4AF37] transition-colors">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-serif font-bold mb-6">${plan.price}<span className="text-lg text-[#E0DCD3]/50 font-sans">/mes</span></p>
              <a 
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#D4AF37] text-[#222222] font-bold rounded-xl hover:bg-white transition-all"
              >
                Acceder ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}