import {
    Association,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    BelongsToCreateAssociationMixin,
    CreationOptional,
    DataTypes,
    InferCreationAttributes,
    InferAttributes,
    Model,
    NonAttribute,
    Sequelize
  } from 'sequelize'
  import type { Curso } from './Curso'
  
  type UsuarioAssociations = 'curso'
  
  export class Usuario extends Model<
    InferAttributes<Usuario, {omit: UsuarioAssociations}>,
    InferCreationAttributes<Usuario, {omit: UsuarioAssociations}>
  > {
    declare id: CreationOptional<number>
    declare nombre: string | null
    declare apellidos: string | null
    declare fnacimiento: string | null
    declare email: string | null
    declare password: string | null
    declare telefono: string | null
    declare tipo: string | null
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
  
    // Usuario belongsTo Curso
    declare curso?: NonAttribute<Curso>
    declare getCurso: BelongsToGetAssociationMixin<Curso>
    declare setCurso: BelongsToSetAssociationMixin<Curso, number>
    declare createCurso: BelongsToCreateAssociationMixin<Curso>
    
    declare static associations: {
      curso: Association<Usuario, Curso>
    }
  
    static initModel(sequelize: Sequelize): typeof Usuario {
      Usuario.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        nombre: {
          type: DataTypes.STRING(45)
        },
        apellidos: {
          type: DataTypes.STRING(45)
        },
        fnacimiento: {
          type: DataTypes.STRING(45)
        },
        email: {
          type: DataTypes.STRING(45)
        },
        password: {
          type: DataTypes.STRING(60)
        },
        telefono: {
          type: DataTypes.STRING(60)
        },
        tipo: {
          type: DataTypes.STRING(45)
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize
      })
      
      return Usuario
    }
  }