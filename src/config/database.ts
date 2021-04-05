// export default () => ({
//     port: parseInt(process.env.PORT, 10) || 3000,
//     database: {
//       host: process.env.DATABASE_HOST,
//       port: parseInt(process.env.DATABASE_PORT, 10) || 5432
//     }
//   });


export default () => ({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: process.env.TYPEORM_SYNCHRONIZE
});
