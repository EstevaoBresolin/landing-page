
export default function Section2() {
  return (
    <section id="solucoes" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-white titulo">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quaerat!
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2  titulo">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    icon: "🇧🇷🇺🇸",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit, pariatur eligendi possimus quaerat! Reiciendis magni odit corporis consequuntur.",
    text: "adipisicing elit. Possimus, aperiam eum. Nobis dignissimos minus et assumenda molestiae obcaecati dolore molestias placeat, pariatur eligendi possimus quaerat! Reiciendis magni odit corporis consequuntur.",
  },
  {
    icon: "📊",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aperiam eum.",
    text: "adipisicing elit. Possimus, aperiam eum. Nobis dignissimos minus et assumenda molestiae obcaecati dolore molestias placeat, pariatur eligendi possimus quaerat! Reiciendis magni odit corporis consequuntur.",
  },
  {
    icon: "🌟",
    title: "Possimus, aperiam eum. Nobis dignissimos minus et assumenda molestiae obcaecati dolore molestias placeat, pariatur",
    text: "adipisicing elit. Possimus, aperiam eum. Nobis dignissimos minus et assumenda molestiae obcaecati dolore molestias placeat, pariatur eligendi possimus quaerat! Reiciendis magni odit corporis consequuntur.",
  },
  {
    icon: "🛡️",
    title: "consectetur adipisicing elit. Possimus,",
    text: "adipisicing elit. Possimus, aperiam eum. Nobis dignissimos minus et assumenda molestiae obcaecati dolore molestias placeat, pariatur eligendi possimus quaerat! Reiciendis magni odit corporis consequuntur.",
  },
];