const Index = () => import("@/views/Index");

export default [
    {path: "/", component: Index, meta: {requiresGuest: true}},
]