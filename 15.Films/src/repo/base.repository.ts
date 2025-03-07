/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient } from '@prisma/client';
const debug = createDebug('movies:repository:items');

export abstract class BaseRepo<T, U> implements Repository<T> {
    prisma: PrismaClient;
    itemName!: string;
    constructor(
        public prismaModel: U & {
            findMany: Function;
            findUniqueOrThrow: Function;
            create: Function;
            update: Function;
            delete: Function;
        },
    ) {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<T[]> {
        debug(`Reading ${this.itemName}s`);
        const items = await this.prismaModel.findMany();
        return items;

        // return await this.prismaModel.findMany();
    }

    async readById(id: string): Promise<T> {
        const item = await this.prismaModel.findUniqueOrThrow({
            where: { id },
        });

        return item;
    }

    // async create(data: Omit<T, 'id'>): Promise<T> {
    async create(data: Omit<T, 'id'>): Promise<T> {
        const item = await this.prismaModel.create({
            data,
        });

        return item;
    }

    async update(id: string, data: Partial<Omit<T, 'id'>>): Promise<T> {
        const item = await this.prismaModel.update({
            where: { id },
            data,
        });

        return item;
    }

    async delete(id: string): Promise<T> {
        const item = await this.prismaModel.delete({
            where: {
                id,
            },
        });

        return item;
    }
}
