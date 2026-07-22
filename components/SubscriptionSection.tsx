import { subscriptionPlans } from '../data/subscription';

export default function SubscriptionSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#E8E0D0] bg-[#222222] px-6 py-16 text-white shadow-[0_24px_80px_rgba(34,34,34,0.14)] md:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.20),_transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Acceso exclusivo
        </span>
        <h2 className="mb-6 text-3xl font-serif font-semibold md:text-5xl">
          {subscriptionPlans.title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[#E0DCD3]/80">
          {subscriptionPlans.description}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {subscriptionPlans.plans.map((plan) => (
            <div key={plan.id} className="rounded-[24px] border border-[#3D3D3D] bg-[#2D2D2D]/90 p-8 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]">
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-serif font-semibold text-white">
                ${plan.price}
                <span className="ml-2 text-lg font-sans text-[#E0DCD3]/60">/mes</span>
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#3D3D3D] pt-6 text-sm text-[#E0DCD3]/80">
                <span>Acceso completo a la academia</span>
                <span className="font-semibold text-[#D4AF37]">Premium</span>
              </div>
              <a
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-[#D4AF37] px-5 py-4 text-center font-semibold text-[#222222] transition hover:bg-white"
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