import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient } from '@prisma/client';
import { Film } from '@prisma/client';
import { FilmCreateDTO } from '../dto/films.dto.js';
import { BaseRepo } from './base.repository.js';

const debug = createDebug('movies:repository:films');

export class FilmRepo extends BaseRepo<Film, PrismaClient> {
    prisma: PrismaClient;
    override itemName = 'film'
    constructor() {
        super(new PrismaClient().film);
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

